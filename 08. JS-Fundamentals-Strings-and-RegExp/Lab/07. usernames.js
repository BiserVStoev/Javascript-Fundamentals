function extractUsernames(inputEmails) {
    let result = inputEmails.map(s => s.split('@'));
    result = result.map(([user, domain]) => user + '.' + domain.split('.').map(s => s[0]).join(''));
    console.log(result.join(', '));
}

extractUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);