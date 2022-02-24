const SUPABASE_URL = 'https://swgiucfleoaonawjlvme.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3Z2l1Y2ZsZW9hb25hd2psdm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTIxNjEsImV4cCI6MTk2MDAyODE2MX0.KwPiwmAFu_q_7yxOSUYv4k6Ejgu8uDsvfsGLixOpD9o';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

// everything given is above, functions I am creating are below



function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}
export async function fetchItems() {
    const resp = await client.from('todo_shopping').select('*');
// console.log('hi', resp);
    return checkError (resp);
}
export async function createItem(description) {
    const resp = await client.from('todo_shopping').insert({ description });
// console.log('hi', resp);
    return checkError(resp);
}
export async function completeItem(id) {
    const resp = await client.from('todo-shopping').update({ complete: true }).match({ id });
    // console.log(resp);
    return checkError(resp);
}
