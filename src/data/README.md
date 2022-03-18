# Data Layer

This Layer is the only one who know about the domain layer. So, we can import 
from the domain layer, but we must be careful, cuz if we wanna return something 
from here that's gonna be used in the infrastructure layer, we cannot just 
return an entity from the domain. In order to do that, we can create a data transfer
object, its only purpose is making the connection between two different layers.

Here, all services for the useCases will be present. But, again, we ought not depend 
on concrete classes here, for example the database. In order to do that, we can inject 
a dependency on the service constructor. That dependency is supposed to be an interface, 
which we can put in our contracts folder. This is one of the SOLID principles, it's the
__Dependency Inversion Principle__ to be more precise. With this principle in place, 
we can actually implement another one, the __Liskov Substitution Principle__, so that, we can 
use as many implementations of the injected class as we want. As long as that class obey the 
contract, everything is gonna work properly.

