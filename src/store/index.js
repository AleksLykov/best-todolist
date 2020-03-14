import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";

Vue.use(Vuex);

import { todos } from "../main";

export default new Vuex.Store({
  state: {
    todos: [],
    newTask: {
      taskName: "",
      taskContent: "",
      taskRead: false
    },
    blankTask: {
      taskName: "",
      taskContent: "",
      taskRead: false
    },
    editableTask: {
      taskName: "",
      taskContent: ""
    },
    pages: 0
  },
  getters: {
    TODOS: state => {
      return state.todos;
    },
    NEWTASK: state => {
      return state.newTask;
    },
    EDITABLETASK: state => {
      return state.editableTask;
    },
    PAGES: state => {
      return state.pages;
    }
  },
  mutations: {
    ...vuexfireMutations,
    ADD_TASK: (state, payload) => {
      state.newTask = state.blankTask;
      payload.createdAt = new Date();
      todos.add(payload);
    },
    TODOS_REVERSE: state => {
      state.todos = state.todos.reverse();
    },
    SET_EDITABLETASK: (state, payload) => {
      state.editableTask = payload;
    },
    CLEAR_EDITABLETASK: state => {
      state.editableTask = {};
    }
  },
  actions: {
    GET_TODOS: firestoreAction((context, payload) => {
      context.bindFirestoreRef("todos", payload);
    }),
    ADD_TASK: (context, payload) => {
      context.commit("ADD_TASK", payload);
    },
    TODOS_REVERSE: context => {
      context.commit("TODOS_REVERSE");
    },
    SET_EDITABLETASK: (context, payload) => {
      context.commit("SET_EDITABLETASK", payload);
    },
    CLEAR_EDITABLETASK: context => {
      context.commit("CLEAR_EDITABLETASK");
    }
  },
  modules: {}
});
