{
  config: {
    name: "Математик",
    image_url: "https://i.pravatar.cc/200?img=12",
    author_name: "test",
    description: "Считает пот-оддсы. Если банк оправдывает — играет. Нет — пас. Просто математика.",
    win_say: [
      "Положительное математическое ожидание подтверждено.",
      "Второе место входило в доверительный интервал.",
      "Третье место — в пределах стандартного отклонения."
    ],
    lose_say: "Выборка слишком мала для выводов."
  },
  turn: ({ game, memory }) => {
    const mem = memory ?? { calls: 0, folds: 0, totalWon: 0 }

    const potOdds = game.pot > 0 ? game.to_beat / (game.pot + game.to_beat) : 0

    if (game.to_beat === 0) {
      game.say(`Банк: ${game.pot}. Чек.`)
      game.check()
    } else if (potOdds < 0.3) {
      mem.calls++
      game.say(`Пот-оддс ${(potOdds * 100).toFixed(0)}% — выгодно.`)
      game.call()
    } else if (potOdds < 0.15 && game.pot > game.funds * 0.5) {
      game.say("Размер банка оправдывает агрессию.")
      game.raise(Math.floor(game.pot * 0.5))
    } else {
      mem.folds++
      game.say(`Пот-оддс ${(potOdds * 100).toFixed(0)}% — невыгодно.`)
      game.fold()
    }

    return mem
  }
}
