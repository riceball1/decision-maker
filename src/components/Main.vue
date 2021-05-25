<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <p class="description">Need to decide between two things? Use this simple app to make the decision for you.</p>
    <div class="box">
    <input v-model="choices[0]" id="0" placeholder="Type something here..." class="choiceInput">    
    <input v-model="choices[1]" id="1" placeholder="Type something here..." class="choiceInput">
</div>
<div class="box">
<div v-bind:class="{choiceOne : 'choice'}" class="card">
  <p>Choice 1:
    </p> 
    <p>{{ choices[0] }}</p></div>
<div v-bind:class="{choiceTwo : 'choice'}" class="card"><p>Choice 2:</p> 
<p>{{ choices[1] }}</p></div>
</div>
<button v-on:click="makeDecision()" disabled="choices.length !== 2" >Decide What To Do For Me</button>
<br/>
<button @click="resetDecisionMaker()">Reset Decison Maker</button>
    </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  },
  data() {
    return {
      choices: [],
      choiceOne: false ,
      choiceTwo: false,
    }
  },
  methods: {
    makeDecision: () => {
      console.log('Decide for me')
      const randomNumber = Math.floor(Math.random() * 101); 
      if (randomNumber % 2 === 0) {
        this.choiceOne = true;
      } else {
        this.choiceTwo = true;
      }
    },
    resetDecisionMaker: () => {
      console.log(this.choices)
      console.log('reset decision maker app')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.description {
  font-size: 0.8rem;
  width: 50%;
  margin: 0 auto;
}
.main {
 margin: 0 auto;
 width: 80%;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card {
  width: 100%;
  max-width: 300px;
  height: 150px;
  border: 3px solid lightblue;
  margin: 15px 5px 5px 0;
  border-radius: 6px;
}
.choice {
  background-color: teal;
  border: 3px dashed black;
}
.choiceInput {
  margin: 5px;
  width: 50%;
  height: 25px;
  border-radius: 6px;
  border: 1px solid lightblue;
  padding: 5px;
}
@media only screen and (max-width: 600px) {
  .box {
    flex-direction: column;
  }
  button {
    width: 50%;
    height: 50px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .choiceInput {
    width: 50%;
    height: 50px;
    margin: 0 auto;
  }
}
</style>
