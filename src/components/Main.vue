<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <p class="description">Need to decide between two things? Use this simple app to make the decision for you.</p>
    
    <div class="box">
      <div class="choiceInputBox">
        <label for="choiceOne">Choice One</label>
      <input v-model="choices[0]" id="choiceOne" placeholder="Type something here..." class="choiceInput">    
      </div>
      <div class="choiceInputBox">
        <label for="choiceTwo">Choice Two</label>
        <input v-model="choices[1]" id="choiceTwo" placeholder="Type something here..." class="choiceInput">
      </div>
  </div>
<div class="box">
<div v-bind:class="{'activeChoice' : choiceOne}" class="card">
  <h3>One
    </h3> 
    <p>{{ choices[0] }}</p></div>
<div v-bind:class="{'activeChoice' : choiceTwo}" class="card"><h3>Two</h3> 
<p>{{ choices[1] }}</p></div>
</div>
  <button class="decisionButton" v-on:click="makeDecision" >Decide For Me</button>
  <br/>
  <button class="resetButton" @click="resetDecisionMaker">Reset Decison</button>
    </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
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
.description {
  font-size: 1rem;
  width: 80%;
  margin: 5px auto;
}
.main {
 margin: 0 auto;
 padding: 10px;
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
}
.card {
  width: 100%;
  max-width: 100%;
  height: 150px;
  border: 3px solid lightblue;
  margin: 15px 5px 5px 0;
  border-radius: 6px;
  font-size: 1.5rem;
}
.activeChoice {
  background-color: teal;
  border: 3px dashed black;
  color: white;
}
.choiceInput {
  margin: 5px;
  height: 25px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid lightblue;
  padding: 5px;
  font-size: 1rem;
  background-color: lightgray;
}
button {
  width: 50%;
  height: 50px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 6px;
  font-size: 1rem;
}
.decisionButton {
  background-color: teal;
  color: white;
}
.resetButton {
  background-color: pink;
}
@media only screen and (max-width: 600px) {
  .box {
    flex-direction: column;
  }
  .choiceInput {
    width: 100%;
    height: 50px;
    margin: 0 auto;
  }
}
</style>
