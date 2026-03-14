# Reset SSH Host Key After Reimaging a Server

When a machine is reimaged, its SSH **host keys change**. The client may warn about a potential man-in-the-middle attack because the stored key no longer matches.

## Identify Stored Keys

Check if the host exists in the client `known_hosts` file:

`ssh-keygen -F <host-or-ip>`

Example:

`ssh-keygen -F 192.168.1.10`

## Remove Stored Keys

Remove all stored keys for that host:

`ssh-keygen -R <host-or-ip>`

Example:

`ssh-keygen -R 192.168.1.10`

This deletes the corresponding entries from `~/.ssh/known_hosts`.

## Reconnect

Connect again:

`ssh user@<host-or-ip>`

Accept the new key when prompted:

`yes`

The new host key will be stored automatically.

## Optional: Inspect Server Key Before Trusting

`ssh-keyscan <host-or-ip>`
