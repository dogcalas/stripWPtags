export as namespace stripWPtags

export = stripWPtags

/**
 * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
 * final chunk will be the remaining elements.
 *
 * @param html The text to process.
 * @param allowedTags Tags which aren't removed
 * @param tagReplacement Removed tags are replaced with this
 * @return Returns the input string, sans any html tags that weren't allowed
 */
declare function stripWPtags(
  html: string,
  allowedTags?: string | string[],
  tagReplacement?: string
): string

declare namespace stripWPtags {
  export const init_streaming_mode: (
    allowedTags?: string | string[],
    tagReplacement?: string
  ) => (html: string) => string
}
