{
  config: {
    name: "Трус",
    image_url: "https://i.pravatar.cc/200?img=3",
    author_name: "test",
    description: "Всегда пасует. Даже когда не надо. Особенно когда не надо.",
    win_say: [
      "Они все спасовали?! Я выиграл?!",
      "Второе место — это почти победа над теми, кто проиграл",
      "Третье... ну хоть не последнее"
    ],
    lose_say: "Я так и знал. Я всегда это знаю заранее."
  },
  turn: ({ game, memory }) => {
    if (game.to_beat === 0) {
      game.say("Чек. Пока безопасно.")
      game.check()
    } else {
      const phrases = [
        "Нет-нет-нет.",
        "Это ловушка.",
        "Я пас. Интуиция.",
        "Слишком рискованно.",
        "Не в этот раз.",
      ]
      game.say(phrases[game.round % phrases.length])
      game.fold()
    }
    return memory
  }
}
