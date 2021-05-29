import {makeIpfs, makeOdb} from './lib/odb';

async function main() {
  const ipfs = await makeIpfs(1)
  const db = await makeOdb("cemail.mail.events.dev.1");
  db.events.on('replicate', (address: string) => console.debug("replicate", address))
  db.events.on('ready', (dbname: string) => console.log("ready", dbname))
  setInterval(async () => {
    await db.add({
      "to": "did:key:abcde",
      "doc": "ceramic://bafyfoo"
    })
    console.debug("added");
  },5000)

}

main()

//lets run forever.
//while (1==1);