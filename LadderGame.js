import { argv } from 'node:process';

const participant = Number(argv[2]);

if (participant < 2 || participant > 8) {
  console.log('프로그램 종료');
  process.exit();
}

console.log(`사다리게임 참가인원은 ${participant}명입니다. 따라라라란딴 따라라라란딴`);

const printLadder = (participant, heightOfLadder = 4) => {
  const row = participant - 1;
  const column = heightOfLadder;
  const frameOfLadder = Array.from(Array(column), () => Array.from(Array(row)));
  let completedLadder = '';

  for (let i = 0; i < frameOfLadder.length; i++) {
    for (let j = 0; j < row; j++) {
      frameOfLadder[i][j] = Math.floor(Math.random() * 2) === 1 ? '-' : ' ';
    }
  }

  frameOfLadder.forEach((any) => {
    completedLadder += `|${any.join('|')}|\n`;
  });

  console.log(completedLadder.trim());
};

printLadder(participant);
