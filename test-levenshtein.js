import { levenshtein } from "./levenshtein.js"
import test from 'ava' 


test('levenshtein distance', t => {
    [
        ['niche', 'chien', 4],
        ['abc', 'ab', 1],
        ['hakim', 'rasfi', 4],
    ]
    .forEach(([a, b, expected]) => t.is(levenshtein(a, b), expected))
})