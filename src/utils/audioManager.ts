import fs from "fs";
import path from "path";
import slugify from "slugify";

type AudioFile = {
  id: string;
  name: string;
  file: string;
  folder: string;
};

const audioDirectory = path.join(__dirname, "../../audio");

const getAllFiles = (
  dirPath: string,
  arrayOfFiles: string[] = []
): string[] => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (file.endsWith(".mp3")) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
};

const allAudioFiles: AudioFile[] = getAllFiles(audioDirectory).map((file) => {
  const fileName = path.basename(file, ".mp3");
  const relativePath = path.relative(audioDirectory, file);
  const folder =
    path.dirname(relativePath) === "." ? "/" : path.dirname(relativePath);

  return {
    id: slugify(fileName, { lower: true }),
    name: fileName,
    file: file,
    folder: folder,
  };
});

export const getAudioAvailable = (): AudioFile[] => {
  return allAudioFiles;
};

export const getRandomAudioFile = (folder = "/"): AudioFile => {
  const filteredFiles = allAudioFiles.filter(
    (audio) => audio.folder === folder
  );

  const randomIndex = Math.floor(Math.random() * filteredFiles.length);
  return filteredFiles[randomIndex];
};
