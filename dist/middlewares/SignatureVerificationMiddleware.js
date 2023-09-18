"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureVerificationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const nacl = require("tweetnacl");
let SignatureVerificationMiddleware = class SignatureVerificationMiddleware {
    use(req, res, next) {
        const PUBLIC_KEY = process.env.APPLICATION_PUBLIC_KEY;
        const signature = req.get('X-Signature-Ed25519');
        const timestamp = req.get('X-Signature-Timestamp');
        if (!signature || !timestamp) {
            return res.status(401).end('Invalid request signature');
        }
        const isVerified = nacl.sign.detached.verify(Buffer.from(timestamp + req.body.toString()), Buffer.from(signature, 'hex'), Buffer.from(PUBLIC_KEY, 'hex'));
        if (!isVerified) {
            return res.status(401).end('Invalid request signature');
        }
        next();
    }
};
exports.SignatureVerificationMiddleware = SignatureVerificationMiddleware;
exports.SignatureVerificationMiddleware = SignatureVerificationMiddleware = __decorate([
    (0, common_1.Injectable)()
], SignatureVerificationMiddleware);
//# sourceMappingURL=SignatureVerificationMiddleware.js.map