type Embed = {
  title?: string;
  type?: string;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: {
    text?: string;
    icon_url?: string;
    proxy_icon_url?: string;
  };
  image?: {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
  };
  thumbnail?: {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
  };
  video?: {
    url?: string;
    height?: number;
    width?: number;
  };
  provider?: {
    name?: string;
    url?: string;
  };
  author?: {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
  };
  fields?: {
    name?: string;
    value?: string;
    inline?: boolean;
  }[];
}

type AllowedMentions = {
  parse?: string[];
  roles?: string[];
  users?: string[];
  replied_user?: boolean;
}

enum Component {
  ActionRow = 1,
  Button = 2,
  SelectMenu = 3,
  TEXT_INPUT = 4,
  USER_SELECT = 5,
  ROLE_SELECT = 6,
  MENTIONABLE_SELECT = 7,
  CHANNEL_SELECT = 8,
}

type Attachment = {
  id: string;
  filename: string;
  description?: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
  ephemeral?: boolean;
  duration_secs?: number;
  waveform?: string
  flags?: number;
}

export type INTERACTION_CALLBACK_DATA = {
  tts?: boolean;
  content?: string;
  embeds?: Embed[];
  allowed_mentions?: AllowedMentions;
  flags?: number;
  components?: Component[];
  attachments?: Attachment[];
};