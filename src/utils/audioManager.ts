import fs from 'fs';
import path from 'path';

type AudioFile = {
    name: string;
    file: string;
};

const audioDirectory = path.join(__dirname, '../../audio');

export const getAudioAvailable = (): AudioFile[] => {
    const audioFiles = fs.readdirSync(audioDirectory).filter(file => file.endsWith('.mp3'));

    return audioFiles.map(file => ({
        name: file.replace('.mp3', ''),
        file: path.join(audioDirectory, file)
    }));
}

export const getRandomAudioFile = (): AudioFile => {
    const audioFiles = getAudioAvailable();
    const randomIndex = Math.floor(Math.random() * audioFiles.length);

    return audioFiles[randomIndex];
};