import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as nacl from 'tweetnacl';

@Injectable()
export class SignatureVerificationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const PUBLIC_KEY = process.env.APPLICATION_PUBLIC_KEY;
    const signature = req.get('X-Signature-Ed25519');
    const timestamp = req.get('X-Signature-Timestamp');

    if (!signature || !timestamp) {
      return res.status(401).end('Invalid request signature');
    }

    const isVerified = nacl.sign.detached.verify(
      Buffer.from(timestamp + req.body.toString()),
      Buffer.from(signature, 'hex'),
      Buffer.from(PUBLIC_KEY, 'hex')
    );

    if (!isVerified) {
      return res.status(401).end('Invalid request signature');
    }

    next();
  }
}
