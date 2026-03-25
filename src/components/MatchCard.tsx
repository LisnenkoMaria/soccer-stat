import type { Match } from '../types';
import { formatLocalDate, formatLocalTime } from '../utils/dateUtils';
import { formatScore } from '../utils/scoreFormatter';

interface MatchCardProps {
    match: Match;
}

function getStatus(status: string): string {
    if (status === 'SCHEDULED') return 'Scheduled';
    if (status === 'FINISHED') return 'Finished';
    if (status === 'IN_PLAY') return 'In play';
    if (status === 'PAUSED') return 'Paused';
    if (status === 'LIVE') return 'Live';
    if (status === 'POSTPONED') return 'Postponed';
    if (status === 'CANCELED') return 'Canceled';
    return status;
}

export function MatchCard({ match }: MatchCardProps) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#fff'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <div style={{ fontWeight: 'bold' }}>{match.homeTeam.name}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '0 1rem' }}>
                    {formatScore(match)}
                </div>
                <div style={{ fontWeight: 'bold' }}>{match.awayTeam.name}</div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '0.5rem',
                fontSize: '0.9rem',
                color: '#666'
            }}>
                <div>{formatLocalDate(match.utcDate)} {formatLocalTime(match.utcDate)}</div>
                <div>Status: {getStatus(match.status)}</div>
            </div>
        </div>
    );
}