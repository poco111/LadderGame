// 1. 사다리 인원 입력 받기
// process.argv를 이용하여 사다리 게임에 참여할 인원을 입력받는다.
// 만약 사다리 인원이 2명 미만이거나 8명을 초과할 경우 프로그램을 종료한다.
import { argv } from 'node:process';

const participant = Number(argv[2]);

if (participant < 2 || participant > 8) {
  console.log('프로그램 종료');
  process.exit();
}

console.log(`사다리게임 참가인원은 ${participant}명 입니다`);
