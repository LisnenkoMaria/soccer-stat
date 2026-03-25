import type { Match } from '../types';

export function formatScore(match: Match): string {
    if (!match || !match.score) {
        return '– : –';
    }

    const fullTimeHome = match.score.fullTime?.home;
    const fullTimeAway = match.score.fullTime?.away;

    if (fullTimeHome !== null && fullTimeHome !== undefined &&
        fullTimeAway !== null && fullTimeAway !== undefined) {
        return `${fullTimeHome}:${fullTimeAway}`;
    }

    return '– : –';
}