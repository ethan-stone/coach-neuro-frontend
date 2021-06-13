import { ref, Ref } from "vue";
import { firebase, auth } from "../firebase";

export const user: Ref<firebase.User> = ref<firebase.User>(null);
