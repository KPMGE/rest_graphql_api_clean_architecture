# presentation

Here, we will talk to the outside wold by using our services. 
It's important to notice that we shouldn't be coupled with any 
concrete class. We've created interfaces for our use cases before, so we 
should depend on them here, not in any concrete implementation. 

More than that, we should not depend on any framework. So, we can design a http-like 
interface that's gonna allow us reuse all this logic independently of the framework.
