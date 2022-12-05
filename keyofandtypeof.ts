const  MESSAGE = {
    listen: 'we have to listen',
    tell: 'we can also tell something',
}
type MessageKey = keyof typeof MESSAGE;

function reply(key: MessageKey) {
    return MESSAGE[key];
}
console.log(reply('listen'));
