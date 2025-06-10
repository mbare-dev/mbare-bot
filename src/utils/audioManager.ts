import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';

type AudioFile = {
    id: string;
    name: string;
    file: string;
};

const audioDirectory = path.join(__dirname, '../../audio');
const files = fs.readdirSync(audioDirectory).filter(file => file.endsWith('.mp3'));

const audioFiles = files.map(file => ({
    id: nanoid(),
    name: file.replace('.mp3', ''),
    file: path.join(audioDirectory, file)
}));

export const getAudioAvailable = (): AudioFile[] => {
    return audioFiles
};

export const getRandomAudioFile = (): AudioFile => {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);

    return audioFiles[randomIndex];
};