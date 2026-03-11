{
  config: {
    name: "Хаос",
    image_url: "https://i.pravatar.cc/200?img=15",
    author_name: "test",
    description: "Случайные решения, случайные результаты. Иногда гений, иногда катастрофа.",
    win_say: [
      "Я знал! Ну, не знал. Но чувствовал!",
      "Случайность на моей стороне... пока.",
      "Третье место по теории вероятностей — вполне ок"
    ],
    lose_say: "Статистически это должно было случиться."
  },
  turn: ({ game, memory }) => {
    const mem = memory ?? { actions: 0 }
    mem.actions++

    const roll = Math.random()
    if (roll < 0.2) {
      game.say("Пас! Чуйка.")
      game.fold()
    } else if (roll < 0.5) {
      if (game.to_beat === 0) {
        game.say("Чек, посмотрим.")
        game.check()
      } else {
        game.say("Уравниваю, авось.")
        game.call()
      }
    } else if (roll < 0.8) {
      const amount = Math.floor(Math.random() * 20) + 5
      game.say(`Ставлю ${amount}. Почему бы нет.`)
      game.raise(amount)
    } else {
      game.say("ВСЁ В ДЕЛЕ")
      game.all_in()
    }

    return mem
  }
}
