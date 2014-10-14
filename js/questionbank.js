window.quiz = {};
quiz.questions = [
    [
        {id: 1, difficulty: "Easy", name: "Selling is just getting an order from a customer", opta: "Yes", optb: "No", optc: "I dont know", optd: "None of the above"},
        {id: 2, difficulty: "Easy", name: "Who benefits from effective selling?", opta: "Customers", optb: "Consumers", optc: "Company & Employees", optd: "All the above"},
        {id: 3, difficulty: "Easy", name: "The sale is complete when ...", opta: "I get the order from the customer", optb: "The product is delivered to the customer", optc: "At the end of the day", optd: "When we collect payment for the product"},
        {id: 4, difficulty: "Easy", name: "Where is the product transported to from the bottling plant?", opta: "Warehouse", optb: "Customer", optc: "Consumer", optd: "Supermarket"}
    ],
    [
        {id: 5, difficulty: "Normal", name: "Getting someone to purchase your products in return for payment is called …", opta: "Buying", optb: "Selling", optc: "Delivery", optd: "Trade"},
        {id: 6, difficulty: "Normal", name: "The customer in this case is", opta: "Retail Outlet", optb: "End Consumer", optc: "Buyer", optd: "None of the above"},
        {id: 7, difficulty: "Normal", name: "Customers make more money", opta: "if they sell more", optb: "if they buy more", optc: "if they store more", optd: "All the above"},
        {id: 8, difficulty: "Normal", name: "What happens if a company cannot sell its products?", opta: "It wont make money", optb: "It wont hire people", optc: "Consumers wont get these products", optd: "All the above"}
    ],
    [
        {id: 9, difficulty: "Difficult", name: "Selling skills include …", opta: "Product knowledge", optb: "Good relationship", optc: "Good service", optd: "All the above"},
        {id: 10, difficulty: "Difficult", name: "What is required in order to sell effectively?", opta: "Positive attitude", optb: "Good communication", optc: "Fair price", optd: "All the above"}
    ]

];

quiz.answers = [
    {id: 1, correct: "optb", payoff: 1, correct_answer: "0"},
    {id: 2, correct: "optd", payoff: 1, correct_answer: "1"},
    {id: 3, correct: "optd", payoff: 1, correct_answer: "2"},
    {id: 4, correct: "opta", payoff: 1, correct_answer: "3"},
    {id: 5, correct: "optb", payoff: 2, correct_answer: "0"},
    {id: 6, correct: "opta", payoff: 2, correct_answer: "1"},
    {id: 7, correct: "opta", payoff: 2, correct_answer: "2"},
    {id: 8, correct: "optd", payoff: 2, correct_answer: "3"},
    {id: 9, correct: "optd", payoff: 3, correct_answer: "0"},
    {id: 10, correct: "optd", payoff: 3, correct_answer: "1"}
];
//
quiz.slideLinks=["Facebook","Twitter","Google Plus"];
quiz.slideAddresses=["","www.google.com",""];


//div class="g-plus" data-action="share" data-href="http://www.flipkart.com/"></div>
function getAnswer(id, answer) {
    var result = $.grep(quiz.answers, function (e) {
        return e.id == id;
    });
    if (result.length == 0) {
        alert("Error");
    } else {
        if (answer == result[0].correct) {
            return result[0].payoff + "|| Awesome! That's right ||" + quiz.slideLinks[result[0].correct_answer];
        } else {
            return "0|| Uh-oh, that's wrong! ||" + quiz.slideLinks[result[0].correct_answer];
        }
    }
}