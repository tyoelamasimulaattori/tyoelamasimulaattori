[{
  "name": "mock-case-new",
  "description": "Esimerkki-case.",
  "steps": [
  {
    "id": 1,
    "direction": 0,
    "description": "Esimerkki-casen alkutilanne",
    "options": [
      {
        "name": "Vastausvaihtoehto P1",
        "next_step_id": 2
      },
      {
        "name": "Vastausvaihtoehto P2",
        "next_step_id": 2
      },
      {
        "name": "Vastausvaihtoehto N1",
        "next_step_id": 3
      },
	  {
        "name": "Vastausvaihtoehto N2",
        "next_step_id": 3
      }
    ],
    "tip_id": 1
  },
  {
    "id": 2,
    "direction": 1,
    "description": "Alkutilanteesta ollaan tultu positiiviseen suuntaan. (A-->P)",
    "options": [
      {
        "name": "Vastausvaihtoehto P3",
        "next_step_id": 4
      },
      {
        "name": "Vastausvaihtoehto P4",
        "next_step_id": 4
      },
      {
        "name": "Vastausvaihtoehto N3",
        "next_step_id": 5
      },
	  {
	    "name": "Vastausvaihtoehto N4",
        "next_step_id": 5
	  }
    ]
  },
  {
    "id": 3,
    "direction": -1,
    "description": "Alkutilanteesta ollaan tultu negatiiviseen suuntaan (A-->N)",
    "options": [
      {
        "name": "Vastausvaihtoehto P5",
        "next_step_id": 6
      },
      {
        "name": "Vastausvaihtoehto P6",
        "next_step_id": 6
      },
      {
        "name": "Vastausvaihtoehto N6",
        "next_step_id": 7
      },
      {
        "name": "Vastausvaihtoehto N7",
        "next_step_id": 7
      }
    ],
    "tip-id": 3
  },
  {
    "id": 4,
    "direction": 1,
    "description": "Polku:(A-->P-->P)",
    "options": [
      {
        "name": "Vastausvaihtoehto P7",
        "next_step_id": 8
      },
      {
        "name": "Vastausvaihtoehto P8",
        "next_step_id": 8
      },
      {
        "name": "Vastausvaihtoehto N7",
        "next_step_id": 9
      },
      {
        "name": "Vastausvaihtoehto N8",
        "next_step_id": 9
      }
    ]
  },
  {
    "id": 5,
    "direction": -1,
    "description": "Polku: (A-->P-->N)",
    "options": [
      {
        "name": "Vastausvaihtoehto P9",
        "next_step_id": 10
      },
      {
        "name": "Vastausvaihtoehto P10",
        "next_step_id": 10
      },
      {
        "name": "Vastausvaihtoehto N9",
        "next_step_id": 11
      },
      {
        "name": "Vastausvaihtoehto N10",
        "next_step_id": 11
      }
    ]
  },
  {
    "id": 6,
    "direction": 1,
    "description": "Polku:(A-->N-->P)",
    "options": [
      {
        "name": "Vastausvaihtoehto P11",
        "next_step_id": 12
      },
      {
        "name": "Vastausvaihtoehto P12",
        "next_step_id": 12
      },
      {
        "name": "Vastausvaihtoehto N11",
        "next_step_id": 13
      },
      {
        "name": "Vastausvaihtoehto N12",
        "next_step_id": 13
      }
    ]
  },
  {
    "id": 7,
    "direction": -1,
    "description": "Polku:(A-->N-->N)",
    "options": [
      {
        "name": "Vastausvaihtoehto P13",
        "next_step_id": 14
      },
      {
        "name": "Vastausvaihtoehto P14",
        "next_step_id": 14
      },
      {
        "name": "Vastausvaihtoehto N13",
        "next_step_id": 15
      },
      {
        "name": "Vastausvaihtoehto N14",
        "next_step_id": 15
      }
    ]
  },
  {
    "id": 8,
    "direction": 1,
    "description": "Polku:(A-->P-->P-->P)",
    "options": [
      {
        "name": "Vastausvaihtoehto P15",
        "next_step_id": 16
      },
      {
        "name": "Vastausvaihtoehto P16",
        "next_step_id": 16
      },
      {
        "name": "Vastausvaihtoehto N15",
        "next_step_id": 17
      },
      {
        "name": "Vastausvaihtoehto N16",
        "next_step_id": 17
      }
    ]
  },
  {
    "id": 9,
    "direction": -1,
    "description": "Polku(A-->P-->P-->N)",
    "options": [
      {
        "name": "Vastausvaihtoehto P17",
        "next_step_id": 18
      },
      {
        "name": "Vastausvaihtoehto P18",
        "next_step_id": 18
      },
      {
        "name": "Vastausvaihtoehto N17",
        "next_step_id": 19
      },
      {
        "name": "Vastausvaihtoehto N18",
        "next_step_id": 19
      }
    ],
    "tag_id": 3
  },
  {
    "id": 10,
    "direction": 1,
    "description": "Polku(A-->P-->N-->P)",
    "options": [
      {
        "name": "Vastausvaihtoehto P19",
        "next_step_id": 20
      },
      {
        "name": "Vastausvaihtoehto P20",
        "next_step_id": 20
      },
      {
        "name": "Vastausvaihtoehto N19",
        "next_step_id": 21
      },
      {
        "name": "Vastausvaihtoehto N20",
        "next_step_id": 21
      }
    ]
  },
  {
    "id": 11,
    "direction": -1,
    "description": "Polku(A-->P-->N-->N)",
    "options": [
      {
        "name": "Vastausvaihtoehto P21",
        "next_step_id": 22
      },
      {
        "name": "Vastausvaihtoehto P22",
        "next_step_id": 22
      },
      {
        "name": "Vastausvaihtoehto N21",
        "next_step_id": 23
      },
      {
        "name": "Vastausvaihtoehto N22",
        "next_step_id": 23
      }
    ]
  },
  {
    "id": 12,
    "direction": 1,
    "description": "Polku(A-->N-->P-->P)",
    "options": [
      {
        "name": "Vastausvaihtoehto P23",
        "next_step_id": 24
      },
      {
        "name": "Vastausvaihtoehto P24",
        "next_step_id": 24
      },
      {
        "name": "Vastausvaihtoehto N23",
        "next_step_id": 25
      },
      {
        "name": "Vastausvaihtoehto N24",
        "next_step_id": 25
      }
    ]
  },
  {
    "id": 13,
    "direction": -1,
    "description": "Polku(A-->N-->P-->N)",
    "options": [
      {
        "name": "Vastausvaihtoehto P25",
        "next_step_id": 26
      },
      {
        "name": "Vastausvaihtoehto P26",
        "next_step_id": 26
      },
      {
        "name": "Vastausvaihtoehto N25",
        "next_step_id": 27
      },
      {
        "name": "Vastausvaihtoehto N26",
        "next_step_id": 27
      }
    ]
  },
  {
    "id": 14,
    "direction": 1,
    "description": "Polku(A-->N-->N-->P)",
    "options": [
      {
        "name": "Vastausvaihtoehto P27",
        "next_step_id": 28
      },
      {
        "name": "Vastausvaihtoehto P28",
        "next_step_id": 28
      },
      {
        "name": "Vastausvaihtoehto N27",
        "next_step_id": 29
      },
      {
        "name": "Vastausvaihtoehto N28",
        "next_step_id": 29
      }
    ]
  },
  {
    "id": 15,
    "direction": -1,
    "description": "Polku(A-->N-->N-->N)",
    "options": [
      {
        "name": "Vastausvaihtoehto P29",
        "next_step_id": 30
      },
      {
        "name": "Vastausvaihtoehto P30",
        "next_step_id": 30
      },
      {
        "name": "Vastausvaihtoehto N29",
        "next_step_id": 31
      },
      {
        "name": "Vastausvaihtoehto N30",
        "next_step_id": 31
      }
    ]
  },
  {
    "id": 16,
    "direction": 1,
    "description": "Lopputulos 1 polusta (A-->P-->P-->P-->P)"
  },
  {
    "id": 17,
    "direction": -1,
    "description": "Lopputulos 2 polusta (A-->P-->P-->P-->N)"
  },
  {
    "id": 18,
    "direction": 1,
    "description": "Lopputulos 3 polusta (A-->P-->P-->N-->P)"
  },
    {
    "id": 19,
    "direction": -1,
    "description": "Lopputulos 4 polusta (A-->P-->P-->N-->N)"
  },
    {
    "id": 20,
    "direction": 1,
    "description": "Lopputulos 5 polusta (A-->P-->N-->P-->P)"
  },
  {
    "id": 21,
    "direction": -1,
    "description": "Lopputulos 6 polusta (A-->P-->N-->P-->N)"
  },
  {
    "id": 22,
    "direction": 1,
    "description": "Lopputulos 7 polusta (A-->P-->N-->N-->P)"
  },
  {
    "id": 23,
    "direction": -1,
    "description": "Lopputulos 8 polusta (A-->P-->N-->N-->N)"
  },
  {
    "id": 24,
    "direction": 1,
    "description": "Lopputulos 9 polusta (A-->N-->P-->P-->P)"
  },
  {
    "id": 25,
    "direction": -1,
    "description": "Lopputulos 10 polusta (A-->N-->P-->P-->N)"
  },
    {
    "id": 26,
    "direction": 1,
    "description": "Lopputulos 11 polusta (A-->N-->P-->N-->P)"
  },
    {
    "id": 27,
    "direction": -1,
    "description": "Lopputulos 12 polusta (A-->N-->P-->N-->N)"
  },
  {
    "id": 28,
    "direction": 1,
    "description": "Lopputulos 13 polusta (A-->N-->N-->P-->P)"
  },
    {
    "id": 29,
    "direction": -1,
    "description": "Lopputulos 14 polusta (A-->N-->N-->P-->N)"
  },
    {
    "id": 30,
    "direction": 1,
    "description": "Lopputulos 15 polusta (A-->N-->N-->N-->P)"
  },
    {
    "id": 31,
    "direction": -1,
    "description": "Lopputulos 16 polusta (A-->N-->N-->N-->N)"
  }]
}]