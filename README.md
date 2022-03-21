# Clean Api

## Goal 
This is an implementation of a simple api using clean architecture concepts, so the goal 
here is learning how to create better software, i mean, a decoupled software that is not 
tied to any external resources. 

This is an important concept when it comes to Clean Architecture. Because, what really matters 
in an application is not the framework we're currently using, but the useCases. The logic that makes
our program do what is it supposed to do. So, once our program is coupled, i mean, tied to a external 
resource, like a database for example, if the resource changes, we've got to change our entire code. 

Our goal here is avoid this annoyance as much as possible. In order to do that, we'll divide our program
into layers, where each layer has a very straightforward goal.

> NOTE: Each layer has its own README explaining its purpose in more detail, you can go and check them out. But, I'll explain briefly each layer now


### Domain
The domain is the core of our program, we will be adding our entities and interfaces for useCases there. This layer 
knows nothing about the other layers. More specifically, the other layers manage this layer.


### Data
The data layer is where we will be storing our business rules, there you'll find the concrete implementation 
for useCases that i like to call __services__. An important point here, is that, our services don't depend on 
any external agent like databases for example. In order to achieve such a level of decoupling we need to apply 
the dependency inversion principle, one of the SOLID principles. 

Basically, we will invert de dependency of our service by applying an interface on the class constructor. This is gonna
allow us substitute the implementation of the class. Because from our service's point of view, it does not matter if our 
data is being stored in PostgreSQL, MongoDB or even locally, as long as we have a class that implements the interface and provides the methods we need, everything is supposed to work. And here, we've applied another SOLID principle, the Liskov Substitution principle.

Finally, it's important to notice that this layer knows about the Domain entities, we use them here, but we 
should not return them from here, in order to do that a really nice practice is applying a data transfer object(DTO)
in which we describe the output of our useCase for example. This is gonna protect our infrastructure layer to know about
our domain.


### Infra
The infrastructure layer is where we talk to the outside world to provide some feature. Usually, the concrete 
implementation for our database provider that, normally i call __repository__ will be find. Once again, here
we can have as many implementation as we want. This is a killer feature, because we don't even need a real 
database when developing our application. We can create a class in memory that implements the interface of the 
repository and pass it to the service. And, as long as our fake repository implements all the interface methods, 
everything is gonna work as expected. Later on, adapt a real database is as simple as creating another class that
implements the same interface and passing it to the service instead of the fake one.


### Presentation
Here is the place where we talk to the outside wold by calling the concrete implementations of our useCases. 
Usually we'll do that through a Http Request in a controller, but a really good practice is create our own http-like request and 
response and deal with those entities instead of dependency on express for example. This is gonna allow us use the controller 
independently of the provider. We could use the same controller for a REST api and a GraphQL one for example, and in fact that's precisely what we do in this api.


### Main
The main layer is where the coupling lives. Here, we will instantiate the concrete classed and assemble our application
to be either a REST or a GraphQL api or, in our case, both!

Another good practice is applying some design patterns here, like factories and adapters to make our code more 
readable and extensible.



> this design was inspired by [Rodrigo Manguinho e Rodrigo Branas](https://youtu.be/P0gpCCA8ZPs). TYSM 
