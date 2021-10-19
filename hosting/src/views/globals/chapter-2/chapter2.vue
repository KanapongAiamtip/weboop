<template>
    <div class="sources-page">
  <section class="hero is-sailor-pink is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-gray-border">
          Chapter 2 Introduction Object Oriented Programming
        </h1>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          What does it mean Object Oriented Programming
        </h1><br>
        <p class="subtitle">
          <ui>
            <li>
            High level language
            </li>
            <li>
              Emphasis on data modeling more than structured writing
            </li>
             <li>
              Make it necessary to do blueprints "blueprints" or "Class" of the data model (classes).
               </li>
              <li>
                Then create an object of class to function (coding). The object must be a member or be a type of class.
              </li>
            <li>
              The object must be a member or be a type of class. E.g. Scanner in = new Scanner(System.in);
            </li>
            <li>
              There  before have a class is required to create an object.
            </li>
          </ui>
        </p>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Class Vs Object
        </h1><br>
        <p class="subtitle">
            <ui>
              <li>
                Class is a model or blueprint, which is the definition of a model that is a model of things in real-life (real-world).
              </li>
              <li>
                An object is an object created or created as defined in a class.
              </li>
              <li>
                make use of the new keyword
              </li>
              <li>
                An object must always belong to a particular class.
              </li>
              <li>
                A class is required to have an object.
              </li>
            </ui>
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Principles of Object Oriented Programming
        </h1><br>
        <p class="subtitle">
            <ui>
              <li>
                Encapsulation
              </li>
              <li>
                Inheritance
              </li>
              <li>
                Polymorphism
              </li>
              <li>
                Abstraction
              </li>
            </ui>
        </p>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Encapsulation
        </h1>
        <p>
          It is the principle of encapsulating the state or data of the object from the outside so that the state of the object cannot be accessed, therefore access must be done only through a method (called setter/getter). completely, protected restricts external access but child class is accessible, or public does not restrict external access, etc. Some languages may have more.
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Inheritance
        </h1>
        <p>
          It is the principle of inheriting the properties of an object where a class (subclass) inherited from another class (superclass) inherits all the state and behavior of that class, and can also change the behavior of some methods (overriding) it inherited. It can also expand more capabilities. This allows us to reuse existing code.
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Polymorphism
        </h1>
        <p>
        It is the principle of homogeneity or polymorphism of objects. Similar to the principle of biology, living things can take many forms. or multiple species (e.g. human, Mongoloid, Caucasoid, or Negroid, etc., all of which are also Humans), where a subclass of a class can define its own unique behavior. and also share some of the same functionality as the superclass.
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Abstraction
        </h1>
        <p>
          It is an abstract principle of object, which is the process of removing the concrete part of a class or part. implementation of objects out by maintaining common characteristics or attributes to concreate objects, which in turn uses other OOP principles for abstaction, especially polymorphism, and in some languages there is The abstract/interface keyword is supplied to specify the class to which the abstraction property should be.
        </p>
      </div>
    </div>
  </section>
  <breadcrumb-footer/>
</div>

</template>
<script lang="ts" src="./chapter2.ts"></script>
