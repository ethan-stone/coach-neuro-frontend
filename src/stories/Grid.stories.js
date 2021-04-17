import Grid from "./Grid.vue";
import Card from "./Card.vue";

export default {
  title: "BaseComponents/Grid",
  component: Grid,
  artTypes: {
    colsSmall: {
      controls: {
        type: "select",
        options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
      }
    },
    colsMedium: {
      controls: {
        type: "select",
        options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
      }
    },
    colsLarge: {
      controls: {
        type: "select",
        options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
      }
    },
    gap: {
      controls: {
        type: "select",
        options: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "16",
          "20",
          "24",
          "28",
          "32"
        ]
      }
    }
  }
};

const Template = (args) => ({
  components: { Grid, Card },
  setup() {
    return { args };
  },

  template: `
    <grid v-bind="args">
      <card :height="'64'" :shadow="'lg'">wefwf</card>
      <card :height="'64'" :shadow="'lg'">wefwf</card>
      <card :height="'64'" :shadow="'lg'">wefwf</card>
      <card :height="'64'" :shadow="'lg'">wefwf</card>
      <card :height="'64'" :shadow="'lg'">wefwf</card>
    </grid>
  `
});

export const Default = Template.bind({});
Default.args = {
  colsSmall: "1",
  colsMedium: "3",
  colsLarge: "6",
  gap: "4"
};
