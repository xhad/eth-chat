'use strict'

const PeerId = require('peer-id')
const PeerInfo = require('peer-info')
const Node = require('./libp2p-bundle')

PeerId.createFromJSON(require('./ids/moonId'), (err, peerId) => {
  if (err) {
    throw err
  }
  const peerInfo = new PeerInfo(peerId)
  peerInfo.multiaddrs.add('/ip4/127.0.0.1/tcp/1033')
  const nodeListener = new Node({ peerInfo })
})



