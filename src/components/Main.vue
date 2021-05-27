<template>
  <div class="main">
    <header>
      <h1>{{ msg }}</h1>
      <p class="description">
        Need to decide between two things? Use this simple app to make the decision for you.
      </p>
    </header>
    
    <div class="box">
      <div class="choiceInputBox">
        <label for="choiceOne">Choice One</label>
        <input
          id="choiceOne"
          v-model="choices[0]"
          placeholder="Type here..."
          class="choiceInput"
        >    
      </div>
      <div class="choiceInputBox">
        <label for="choiceTwo">Choice Two</label>
        <input
          id="choiceTwo"
          v-model="choices[1]"
          placeholder="Type here..."
          class="choiceInput"
        >
      </div>
    </div>
    <div class="box">
      <div
        :class="{'activeChoice' : choiceOne}"
        class="card"
      >
        <h2>
          1
        </h2> 
        <p>{{ choices[0] }}</p>
      </div>
      <div
        :class="{'activeChoice' : choiceTwo}"
        class="card"
      >
        <h2>2</h2> 
        <p>{{ choices[1] }}</p>
      </div>
    </div>
    <div class="button-controls">
      <button
        class="decisionButton"
        @click="makeDecision"
      >
        decide
      </button>
      <button
        class="resetButton"
        @click="resetDecisionMaker"
      >
        reset
      </button>
    </div>
    <footer>Code on <a hre="https://github.com/riceball1/decision-maker">github.com/riceball1</a> 2021</footer>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: {
      type: String,
      default: 'Decision Maker'
    }
  },
  data: function () {
    return {
      choices: [],
      choiceOne: false,
      choiceTwo: false,
    }
  },
  methods: {
    makeDecision: function () {
      console.log('Decide for me');
      if (this.choiceOne || this.choiceTwo) {
        console.log('clearing previous decision <3')
        // reset the choices if the decision maker was already used once
        this.choiceOne = false;
        this.choiceTwo = false;
      }
      if (this.choices.length !== 2) {
        alert('Please type in two choices :-) ');
        return;
      }
      const randomNumber = Math.floor(Math.random() * 101); 
      if (randomNumber % 2 === 0) {
        this.choiceOne = true;
      } else {
        this.choiceTwo = true;
      }
    },
    resetDecisionMaker: function () {
      console.log('reset decision maker app');
      this.choices = [];
      this.choiceOne = false;
      this.choiceTwo = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  margin: 10px auto;
  width: 100%;
}
h1 {
  color: #42b983;
  margin: 0;
  margin-bottom: 5px;
}
h2 {
  margin: 0;
}
footer {
  margin-top: 60px;
}
a {
  color: #42b983;
}
.description {
  font-size: 1rem;
  width: 100%;
  margin: 5px auto;
  color: #000;
  font-weight: bold;
  border-radius: 6px;
  padding: 10px;
  background-color: rgba(201, 201, 201, 0.8)
}
.main {
 margin: 0 auto;
 padding: 10px;
 width: 80%;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.choiceInputBox {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
label {
  font-weight: bold;
  color: #42b983;
  text-transform: uppercase;
}
.card {
  width: 100%;
  max-width: 100%;
  height: 150px;
  border: 3px solid lightblue;
  margin: 15px 5px 5px 0;
  border-radius: 6px;
  font-size: 1.5rem;
  color: #42b983;
}
.activeChoice {
  background-color: #9E24AF;
  border: 3px dashed black;
  color: white;
}
.choiceInput {
  margin: 5px;
  height: 50px;
  border: none;
  border-bottom: 4px solid #fff;
  color: #fff;
  padding: 5px;
  font-size: 1.5rem;
  width: 100%;
  background-color: transparent;
}

.choiceInput:focus, .choiceInput:focus-visible {
  outline: 0;
  border-bottom: 4px dashed #42b983;
  background-color: transparent;
}

.choiceInput::placeholder {
  color: lightgray;
  background-color: transparent;
}

.button-controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
button {
  width: 50%;
  height: 60px;
  margin: 10px;
  border-radius: 6px;
  font-size: 1.2rem;
  border: none;
  font-weight: bold;
}
.decisionButton {
  background-color: #42b983;
  color: #000;
}
.resetButton {
  background-color: #9E24AF;
  color: #fff;
}
@media only screen and (max-width: 600px) {
  .box {
    flex-direction: column;
  }
  .choiceInput {
    height: 50px;
    margin: 0 auto;
  }

  button {
    width: 100%;
    font-size: 1.5rem;
  }
}
</style>
