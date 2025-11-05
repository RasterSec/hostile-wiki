# LXC

## Privileged Containers <Badge type="tip" text="check" />

LXC containers can be of two kinds: privileged and unprivileged. Privileged containers aren't safe and should only be used in environments where unprivileged containers aren't available and where you would trust your container's user with root access to the host.

## Cgroup Limits <Badge type="tip" text="check" />
If resource usage is not restricted by setting the relevant lxc.cgroup configuration entries, a user in a container can DoS the host.

## User Limits
If two containers share through identical or overlapping id maps, a common kernel uid, then they also share limits, meaning that a user in a first container can effectively DoS the same user in another container.

## IPv6 Router Advertisements <Badge type="tip" text="check" />
The default LXC bridge is configured with IPv4 addresses only. If the value of `/proc/sys/net/ipv6/conf/default/accept_ra` is > 0 then the LXC host will accept malicious router advertisements from the containers connected to the bridge.

## References

* https://linuxcontainers.org/lxc/security/
