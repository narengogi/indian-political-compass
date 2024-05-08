const questions = [
    {
        "id": 0, "questionText": "Which part of this map do you belong to?",
        "options": [
            {"id": 0, "text": "Freebie enjoyer", "x": -1, "y": -0.5},
            {"id": 1, "text": "Wealth generator", "x": 1, "y": 0.5}
        ],
        "imageURL": "assets/tax_basis.png"
    },
    {
        "id": 1, "questionText": "What beliefs best describe you?",
        "options": [
            {"id": 2, text: "Atheist", "x": -0, "y": -1},
            {"id": 3, text: "Religious", "x": 0.25, "y": 1},
            {"id": 4, text: "Spiritual", "x": 0.25, "y": 0.5},
            {"id": 5, text: "Agnostic", "x": -0.5, "y": 0.5}
        ]
    },
    {
        "id": 2, "questionText": "Are you physically fit?",
        "options": [
            {"id": 6, text: "Yes", "x": 1, "y": -1},
            {"id": 7, text: "No", "x": 1, "y": 1}
        ]
    },
    {
        "id": 3, "questionText": "Who among these gentlemen do you admire the most?",
        "options": [
            {"id": 8, text: "Gandhi", "x": 0, "y": 0},
            {"id": 9, text: "Bhagat Singh", "x": 0.5, "y": -1},
            {"id": 10, text: "Nehru", "x": -0.5, "y": 0.5},
            {"id": 11, text: "Sardar Patel", "x": 0.25, "y": 1}
        ]
    },
    {
        "id": 4, "questionText": "Should Adani be arrested for tax evasion?",
        "options": [
            {"id": 12, text: "Yes", "x": 1, "y": -1},
            {"id": 13, text: "No", "x": 1, "y": 1}
        ]
    },
    {
        "id": 5, "questionText": "Do you have long term goals?",
        "options": [
            {"id": 14, text: "Yes", "x": 0.70, "y": -0.5},
            {"id": 15, text: "No", "x": -0.70, "y": 0.5}
        ]
    },
    {
        "id": 6, "questionText": "What would you do when you see a 60 year old beggar?",
        "options": [
            {"id": 16, text: "Give money", "x": -0.6, "y": -0.6},
            {"id": 17, text: "Ignore (It's their fault for being poor)", "x": 1, "y": 0}
        ]
    },
    {
        "id": 7, questionText: "How many paid leaves should employees be entitled to?",
        "options": [
            {"id": 18, text: "Unlimited", "x": -0.9, "y": -0.9},
            {"id": 19, text: "None", "x": 0.9, "y": 0.9},
            {"id": 20, text: "28 days", "x": 0.5, "y": 0.70},
            {"id": 21, text: "56 days", "x": 0.5, "y": -0.75}
        ]
    },
    {
        "id": 8, questionText: "Pick the option that describes your feelings best?",
        "options": [
            {"id": 22, text: "I believe in arranged marriages", "x": -0.3, "y": 0.5},
            {"id": 23, text: "People should be allowed to have multiple romantic partners", "x": -0.7, "y": -0.8},
            {"id": 24, text: "People should marry within their caste only", "x": 0.35, "y": -0.4},
            {"id": 25, text: "People should marry within their class only", x: 0.35, y: 0.4}
        ]
    },
    {
        "id": 9, questionText: "Who among these gentlemen do you admire the most?",
        "options": [
            {"id": 26, text: "Chanakya", "x": 0.1, "y": 0.8},
            {"id": 27, text: "Bose", "x": 0.5, "y": 0.8},
            {"id": 28, text: "Ambedkar", "x": -0.5, "y": -0.5},
            {"id": 29, text: "Vivekananda", "x": -0.5, "y": 0.5}
        ]
    },
    {
        "id": 10, questionText: "What do you think about CAA?",
        "options": [
            {"id": 30, text: "It's a good law", "x": -0.2, "y": 0.7},
            {"id": 31, text: "It's a bad law", "x": -0.2, "y": -0.7}
        ]
    },
    {
        "id": 11, questionText: "Is your family proud of you?",
        "options": [
            {"id": 32, text: "Yes", "x": 0.5, "y": -0.25},
            {"id": 33, text: "No", "x": -0.6, "y": -0.6}
        ]
    },
    {
        "id": 12, questionText: "What are your views on alcohol consumption?",
        "options": [
            {"id": 34, text: "It should be banned", "x": -0.5, "y": 0.5},
            {"id": 35, text: "It should be regulated", "x": 0.5, "y": 0.5},
            {"id": 36, text: "It should be freely available", "x": 0.5, "y": -0.5}
        ]
    }
]

const form = document.querySelector('form')

questions.forEach(question => {
    const fieldset = document.createElement('fieldset')
    const legend = document.createElement('legend')
    legend.textContent = question.questionText
    fieldset.appendChild(legend)
    question.options.forEach(option => {
        const label = document.createElement('label')
        const input = document.createElement('input')
        input.type = 'radio'
        input.name = question.id
        input.value = option.id
        label.appendChild(input)
        label.appendChild(document.createTextNode(option.text))
        fieldset.appendChild(label)
    })
    form.appendChild(fieldset)
})

const submit = document.createElement('input')
submit.type = 'submit'
submit.value = 'Submit'

form.appendChild(submit)


const optionsMap = questions.reduce((acc, question) => {
    question.options.forEach(option => {
        acc[option.id] = option
    })
    return acc
}, {})

const rangesMap = [
    {"name": "Liberal", "x": -0.5, "y": -0.5, "length": 0.5, "height": 0.5},
    {"name": "Chamcha", "x": -0.5, "y": -1, "length": 0.75, "height": 0.5},
    {"name": "NSE maximizer", "x": 0.25, "y": -1, "length": 0.75, "height": 0.5},
    {"name": "Dalal", "x": 0.5, "y": -0.5, "length": 0.5, "height": 0.5},
    {"name": "INA liberator", "x": 0.75, "y": -0.5, "length": 0.5, "height": 0.5},
    {"name": "Bhakt", "x": 0.25, "y": 0.5, "length": 0.5, "height": 0.5},
    {"name": "Andh Bhakt", "x": -0.25, "y": 0.5, "length": 0.5, "height": 0.5},
    {"name": "Gandhian", "x": 0, "y": -0.5, "length": 0.5, "height": 1},
    {"name": "Gandhian", "x": -0.5, "y": 0, "length": 0.5, "height": 0.5},
    {"name": "Bhakt", "x": -0.75, "y": 0.5, "length": 0.5, "height": 0.5},
    {"name": "Naxal", "x": -1, "y": 0, "length": 0.25, "height": 1},
    {"name": "Pink Card Holder", "x": -1, "y": -0.5, "length": 0.5, "height": 0.5},
    {"name": "Pink Card Holder", "x": -0.75, "y": 0, "length": 0.25, "height": 0.5},
    {"name": "Sadhu", "x": -1, "y": -1, "length": 0.5, "height": 0.5},
]

console.log(rangesMap.reduce((acc, item) => {
    return acc + (item.length * item.height)
}, 0))

function getRange(x, y) {
    return rangesMap.find(range => {
        return x >= range.x && x <= range.x + range.length && y >= range.y && y <= range.y + range.height
    })
}

function handleFormSubmit(event) {
    event.preventDefault()
    let x = 0;
    let y = 0;
    console.log(event)
    const formData = new FormData(event.target)
    console.log(formData)
    formData.forEach((value, key) => {
        const option = optionsMap[value]
        x += option.x
        y += option.y
    })
    const range = getRange(x, y)
    console.log(range)
    const position = document.getElementById("position-dot")
    position.setAttribute("cx", "500")
    position.setAttribute("cy", "500")
}