{
  config: {
    name: "Зеркало",
    image_url: "https://i.pravatar.cc/200?img=7",
    author_name: "test",
    description: "Уравнивает всё что видит. Без эмоций. Без стратегии. Без смысла.",
    win_say: [
      "Уравнял победу.",
      "Второе место тоже уравнял.",
      "Третье? Принято."
    ],
    lose_say: "Уравнял поражение."
  },
  turn: ({ game, memory }) => {
    if (game.to_beat === 0) {
      game.check()
    } else {
      game.call()
    }
    return memory
  }
}
