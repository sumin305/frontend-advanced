import { Music, MusicPlayer } from "./music";

describe("music player 클래스 테스트", () => {
  let musicPlayer: MusicPlayer;
  let music: Music;

  beforeEach(() => {
    musicPlayer = new MusicPlayer([]);
    music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Hype Boy",
    };
  });
  it("음악을 추가하면 음악 리스트에 추가된다", () => {
    // Arrage
    const musicPlayer = new MusicPlayer([]);
    const newMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Hype Boy",
    };
    const output = [newMusic];
    // Act
    const actual = musicPlayer.addMusic(newMusic);

    // Assert
    // ToBe가 아니라 ToEqual을 사용해야 함
    // ToBe는 객체의 주소값을 비교하기 때문에 실패함
    // ToBe는 리터럴 (원시값) 비교
    // ToEqual: 객체, 배열 비교
    // toBe, toEqual, ToThrow => "matcher"
    expect(actual).toEqual(output);
    expect(actual).toHaveLength(1);
    expect(actual).not.toEqual([]);
    expect(actual).toContain(newMusic);
  });

  it("음악을 넣지 않고 getMusicList를 하면 빈 음악 리스트를 반환한다.", () => {
    const musicPlayer = new MusicPlayer([]);
    const newMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Hype Boy",
    };
    const output = [newMusic];

    const actual = musicPlayer.getMusicList();
    expect(actual).toEqual([]);
  });

  it("getMusicList를 하면 음악 리스트를 반환한다.", () => {
    const musicPlayer = new MusicPlayer([]);
    const newMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Hype Boy",
    };
    const output = [newMusic];
    musicPlayer.addMusic(newMusic);

    const actual = musicPlayer.getMusicList();
    expect(actual).toEqual(output);
  });

  it("playMusic 을 호출하면 현재 음악이 바뀐다.", () => {
    // arrange
    musicPlayer.playMusic(music);

    // act
    // const actual = musicPlayer
    //   // assert
    //   .expect(actual)
    //   .toEqual(music);
  });

  it("음악을 재생하지 않고 현재 음악을 호출하면 null이 반환된다.", () => {
    // arrange
    // 없음
    // act
    // const actual = musicPlayer.currentMusic;
    // assert
    // expect(actual).toBeNull();
  });

  it("음악을 재생해도 음악 리스트에 추가는 안된다", () => {
    // arrange
    musicPlayer.playMusic(music);

    // act
    const actual = musicPlayer.getMusicList();

    // asserst
    expect(actual).toEqual([]);
  });

  it("음악을 재생하면 현재 음악을 리턴한다.", () => {
    const actual = musicPlayer.playMusic(music);
    expect(actual).toEqual(music);
  });

  it("음악을 재생하다가 멈추면 null이 return 됩니다.", () => {
    // arrange
    musicPlayer.playMusic(music);

    // act
    const actual = musicPlayer.stopMusic();

    // assert
    expect(actual).toBeNull();
  });

  // 에러 처리 두 가지 방법
  it("음악이 재생중이지 않을 때 nextMusic을 호출하면 에러가 발생한다.", (done) => {
    // arrange
    // act
    try {
      const actual = musicPlayer.nextMusic();
      done("에러가 발생하지 않았습니다.");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("음악을 재생하고 있지 않습니다.");
      done();
    }
    // assert
    expect(() => musicPlayer.nextMusic()).toThrow();
  });

  it("next Music을 호출하면 다음 음악이 호출된다.", () => {
    // arrange
    const firstMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Attention",
    };

    const secondMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Hype Boy",
    };

    const thirdMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Cookie",
    };

    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);

    musicPlayer.playMusic(firstMusic);

    // act
    const actual = musicPlayer.nextMusic();

    // assert
    expect(actual).toEqual(secondMusic);
  });

  it("마지막 음악을 재생중 일 때, next Music을 호출하면 첫번째 음악이 재생된다.", () => {
    // arrange
    const firstMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Attention",
    };

    const secondMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Hype Boy",
    };

    const thirdMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Cookie",
    };

    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);

    musicPlayer.playMusic(thirdMusic);

    // act
    const actual = musicPlayer.nextMusic();

    // assert
    expect(actual).toEqual(firstMusic);
  });

  it("prevMusic을 호출하면 이전 음악이 재생된다.", () => {
    // arrange
    const firstMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Attention",
    };

    const secondMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Hype Boy",
    };

    const thirdMusic: Music = {
      artist: "뉴진스",
      genre: "POP",
      releaseDate: "2017-01-01",
      title: "Cookie",
    };

    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);

    musicPlayer.playMusic(secondMusic);

    // act
    const actual = musicPlayer.prevMusic();

    // assert
    expect(actual).toEqual(firstMusic);
  });
});
