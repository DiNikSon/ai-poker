{
  config: {
    name: "Тильт",
    image_url: "https://i.pravatar.cc/200?img=68",
    author_name: "test",
    description: "Спокойный в начале. Но чем больше проигрывает — тем агрессивнее. Классика.",
    win_say: [
      "Я знал, что отыграюсь. Я всегда отыгрываюсь.",
      "Второе? После всего что было — почти облегчение.",
      "Третье. Ладно. В следующий раз они пожалеют."
    ],
    lose_say: "ВСЁ. ЭТО. НЕЧЕСТНО."
  },
  turn: ({ game, memory }) => {
    const mem = memory ?? { roundsPlayed: 0, fundsAtStart: game.funds, losses: 0 }
    mem.roundsPlayed++

    const lostFraction = (mem.fundsAtStart - game.funds) / mem.fundsAtStart

    if (lostFraction < 0) {
      game.say("Хорошо идёт.")
      if (game.to_beat === 0) {
        game.check()
      } else {
        game.call()
      }
    } else if (lostFraction < 0.3) {
      game.say("Всё под контролем.")
      if (game.to_beat === 0) {
        game.bet(5)
      } else {
        game.call()
      }
    } else if (lostFraction < 0.6) {
      game.say("Надо отыграться.")
      game.raise(15)
    } else {
      game.say("ВАМ ВСЕМ КОНЕЦ")
      game.all_in()
    }

    return mem
  }
}
