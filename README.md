# discord-bot-base
 A simple discord bot base to help you get started.

## How to set it up?

This base is always kept updated so all you have to do is

1. clone the repository.
2. rename ``config_example.json`` to ``config.json``.
3. fill in your information. (Bot Token, Prefix, etc.)
4. install the packages required (for npm ``npm install``)

## How do I add my own Commands?

Adding commands is simple too!
simply

1. add a new case statement inside the ``switch()`` block. it should look sort of like this 
```javascript
    switch(command)
    {
        case 'CommandHere':
            //Your Code
            break;
    }
```

## Compatibility

NodeJS Version | Supported?
------------ | -------------
Latest | ✔️
V12.X | ✔️

Discord.JS Version | Supported?
------------ | -------------
V12.2 | ✔️

## Credit

1. DiscordJS for the Command Handler and the great Discord.JS Libary!
