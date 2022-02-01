export function loadLists() {
    return [
      { 
        title: 'Tasks', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Study C# programming language',
            labels: ['#db0000'],
            user: 'https://i1.sndcdn.com/artworks-000549131829-he5mc7-t500x500.jpg'
          },
          {
            id: 2,
            content: 'PAA-Arbeit machen',
            labels: ['#7159c1'],
            user: 'https://i1.sndcdn.com/artworks-000549131829-he5mc7-t500x500.jpg'
          },
          {
            id: 3,
            content: 'Empezar a hacer el Trabajo de Finalización de Curso',
            labels: ['#7159c1'],
            user: 'https://i1.sndcdn.com/artworks-000549131829-he5mc7-t500x500.jpg'
          },
          {
            id: 4,
            content: 'アニメドロヘドロをもう一度見る。',
            labels: ['#54e1f7'],
            user: 'https://i1.sndcdn.com/artworks-000549131829-he5mc7-t500x500.jpg'
          },
          {
            id: 5,
            content: 'Record song cover',
            labels: ['#54e1f7'],
            user: 'https://i1.sndcdn.com/artworks-000549131829-he5mc7-t500x500.jpg'
          },
        ]
      },
      { 
        title: 'In Progress', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Study for the Wireless Communication exam',
            labels: [],
            user: 'https://i1.sndcdn.com/artworks-000549131829-he5mc7-t500x500.jpg'
          }
        ]
      },
      { 
        title: 'Paused', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: '中国語を勉強する',
            labels: ['#7159c1'],
            user: 'https://i1.sndcdn.com/artworks-000549131829-he5mc7-t500x500.jpg'
          },
          {
            id: 8,
            content: '学习德语',
            labels: ['#54e1f7'],
            user: 'https://i1.sndcdn.com/artworks-000549131829-he5mc7-t500x500.jpg'
          },
          {
            id: 9,
            content: 'Учить немецкий',
            labels: [],
          }
        ]
      },
      { 
        title: 'Done', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Nummer eins-Arbeit machen',
            labels: [],
          },
          {
            id: 12,
            content: 'Nummer zwei-Arbeit machen',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Теорія вивчення"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }