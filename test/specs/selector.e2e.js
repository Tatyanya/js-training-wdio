
describe('angularjs homepage', () => {
    before(async () => {

        await browser.url('http://www.angularjs.org');
    });
    it('should greet the named user', async () => {
        const text = 'Test'
        const el = await $("input[ng-model=yourName]");
        await el.setValue(text);

        const elem = await $('h1.ng-binding');
        await expect(elem).toHaveText(`Hello ${text}!`)
    });
});

describe('todo list', async () => {
    let todoList = '';

    before(async () => {
        await browser.url('http://www.angularjs.org');
        todoList = await $$('[module=todoApp] label');
    });

    it('should list todos', async () => {
        expect(todoList).toBeElementsArrayOfSize(2)
    });

    it('should add a todo', async () => {
        const addTodo = await $('form input[type=text]');
        const addButton = await $('[value="add"]');
        await addTodo.setValue('write a test');
        await addButton.click();
        await browser.pause(3000)
        // await browser.waitUntil(() => { return ($$('[module=todoApp] label')).map(el => el.getText()).includes('write a test') })
        todoList = await $$('[module=todoApp] label');
        expect(todoList).toBeElementsArrayOfSize(3);
        expect(await (await todoList[2].$('span')).getText()).toHaveText('write a test');
    });
});