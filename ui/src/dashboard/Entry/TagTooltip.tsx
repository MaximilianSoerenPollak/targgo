import {TooltipProps} from 'recharts';
import {FInterval} from './dateformat';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';
import moment from 'moment-timezone';
import prettyMs from 'pretty-ms';
import * as React from 'react';

export const TagTooltip = ({active, payload, dateFormat}: TooltipProps & {dateFormat: FInterval}) => {
    if (active && payload) {
        const first = payload[0];
        return (
            <Paper style={{padding: 10}} elevation={4}>
                {first && (
                    <Typography variant={'subtitle2'}>
                        {(() => {
                            const start = dateFormat(moment(first.payload.start));
                            const end = dateFormat(moment(first.payload.end));
                            console.log(first.payload);
                            return start === end ? `${start}` : `${start} - ${end}`;
                        })()}
                    </Typography>
                )}
                {payload.map((entry) => {
                    return (
                        <Typography key={entry.name}>
                            {entry.name}: {prettyMs((entry.payload.data[entry.name] as number) * 1000)}
                        </Typography>
                    );
                })}
            </Paper>
        );
    }

    return null;
};
