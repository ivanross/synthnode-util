import { AudioObject } from "synthnode";

type NodePlayerOptions = {
  duration?: number;
};

export function mono(osc: AudioObject, options?: NodePlayerOptions): never;
export function stereo(
  left: AudioObject,
  right: AudioObject,
  options?: NodePlayerOptions
): never;
