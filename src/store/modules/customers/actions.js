export default {
  async loadCustomers(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const responseData = await response.json();

    context.commit("setCustomers", responseData);
  },
};
