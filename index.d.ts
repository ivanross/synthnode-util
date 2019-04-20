import { AudioObject } from "synthnode";

export function mono(osc: AudioObject): never;
export function stereo(left: AudioObject, right: AudioObject): never;
