import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard() {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://images.unsplash.com/photo-1584559582128-b8be739912e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="Live from space album cover"
            />

            <CardContent sx={{ flex: '1 0 auto' }} className="text-start">
                <Typography component="div" variant="h5">
                   น้ำอัญชันมะนาว
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Lemon adn Butterfly Pea
                </Typography>
            </CardContent>

        </Card>
    );
}
