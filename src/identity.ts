const ULID_ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ" // Crockford's Base32
const ULID_TIME_LENGTH = 10
export const ULID_LENGTH = 26

export function extractDateFromSubjectId(subjectId: string): Date {
    return extractDateFromUlid(extractUlidFromSubjectId(subjectId))
}

/**
 * Subject versions are just ulids.
 */
export function extractDateFromSubjectVersion(version: string): Date {
    return extractDateFromUlid(version)
}

export function extractParentIdFromSubjetId(subjectId: string): string | null {
    const parentSubjectId = subjectId.slice(0, subjectId.slice(0, -ULID_LENGTH - 1).lastIndexOf("/"))
    if (parentSubjectId === "") {
        return null
    }

    return parentSubjectId
}

/**
 * Subject ids are namespaced ids:
 * - "/entity/01M7TS9SPHBCMJYJ7SQ53CXM8X"
 * - "/parent/01M7TSA25MCF0AMC6JVZP8PTSN/subject/01M7TSAA4HJ800DHDBDD28HV73"
 *
 * We extract the last ulid from that id.
 */
export function extractUlidFromSubjectId(subjectId: string): string {
    return subjectId.slice(-ULID_LENGTH)
}

export function extractDateFromUlid(ulid: string): Date {
    return new Date(
        ulid
            .substring(0, ULID_TIME_LENGTH)
            .split("")
            .reverse()
            .reduce(
                (timestamp, character, index) =>
                    timestamp + ULID_ALPHABET.indexOf(character) * Math.pow(ULID_ALPHABET.length, index),
                0,
            ),
    )
}
