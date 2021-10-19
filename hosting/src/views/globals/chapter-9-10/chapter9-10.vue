<template>
<div class="sources-page">
  <section class="hero is-sailor-pink is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-gray-border">
          Chapter 9-10 GUI Components and Event-driven
        </h1>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Structure
        </h1>
        <img src="@/assets/ch9pic1.png" alt="pic" width="600" height="300">
        <p><br>
          To run, you need to import Packet JFrame.
          Usually we use extends or inheritance to the main class, and extends the JFrame's class. The class must be declared as a contractor initial when the class is called. Required for form creation
          and the following important methods
          <ui>
            <li>
              method setVisible()
            </li>
            <li>
              method setSize()
            </li>
            <li>
              method setLocation()
            </li>
            <li>
              method setTitle()
            </li>
            <li>
              method setDefaultCloseOperation()
            </li>
          </ui>
        </p>
        <p><br>
          setVisble is a method used to display whether to display or not.
          setSize is a method that sets the size of windows to display.
          setLocation is a method that takes the time that the program is launched to allow it to run on any part of the screen. If set to (500,280), it runs in the middle of the screen.
          setTitle is a method used to display the name of the program.
          setDefaultCloseOperation() is a method to disable the program.
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          GUI Components
        </h1>
        <h1 class="title is-5">
          JLabel cnsp = new JLabel(Hello World");<br>
          JButton a = new JButton("Yes");
        </h1>
      <p>
        Adding JLabel  and Adding JButton
      </p><br>
      <img src="@/assets/ch9pic2.png" alt="pic" width="600" height="300">
       <h1 class="title is-4">
           <br>
            The Results of Running
        </h1>
      <br>
      <img src="@/assets/ch9pic3.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Class Container
        </h1>
        <img src="@/assets/ch9pic4.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Class JLabel
        </h1>
        <h1 class="title is-4">
          Constructor
        </h1>
        <ui>
          <li>
            JLabel(String text);
          </li>
          <li>
            JLabel(ImageIcon icon);
          </li>
          <li>
            JLabel(String text, ImageIcon icon, SwingConstants.LEFT);//or CENTER,RIGHT,LEADING,TRAILING
          </li>
        </ui><br>

        <h1 class="title is-4">
          Method
        </h1>
        <ui>
          <li>
            void setText(String text);
          </li>
          <li>
            void setIcon(ImageIcon icon);
          </li>
        </ui>
      </div>
    </div>
  </section>

   <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
           JLabel
        </h1>
        <ui>
          <li>
            Provid text on GUI
          </li>
          <li>
            Defined with class JLabel
          </li>
          <li>
            Can display
          </li>
        </ui>
        <p><br>
         Single line of read-only text<br>
         Image<br>
         Text and image
        </p>
      </div>
    </div>
  </section>

    <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
        Class JButton
        </h1>
        <h1 class="title is-4">
          Constructor
        </h1>
        <ui>
          <li>
            JButton(String text);
          </li>
          <li>
            JButton(ImageIcon picture);
          </li>
          <li>
              Jbutton(String text,ImageIcon picture);
          </li>
        </ui><br>

        <h1 class="title is-4">
          Method
        </h1>
        <ui>
          <li>
              void addActionListener(ActionListener object)
          </li>
          <li>
              void setText(String text)
          </li>
          <li>
              void setActionCommand(String cmd);
           </li>
            <li>
                void setIcon(Image icon);
            </li>
            <li>
                void requestFocus();
            </li>
            <pre><br>
            Class.....implements ActionListener
            {
                public void actionPerformed(ActionEvent e){
                  JButton b = (JButton)e.getSource();
                  String x = e.getActionCommand();
                }
            }
            </pre>
        </ui>
      </div>
    </div>
  </section>

    <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
           Some basic GUI components
        </h1>
      </div><br>
        <img src="@/assets/ch9pic5.png" alt="pic" width="600" height="300">
    </div>
    </section>

    <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
           Example JButtom Events
        </h1>
      </div><br>
        <img src="@/assets/ch9pic6.png" alt="pic" width="600" height="300">
          <h1 class="title is-4">
            <br>
           The Results of Running
        </h1>
        <img src="@/assets/ch9pic7.png" alt="pic" width="600" height="300">
        <p><br>
        In case of multiple buttons, we use the command for To be used to separate orders for each buttom on this Example When we press the Yes button, the program will print the word Hello world on the Terminal.
        </p>
    </div>
    </section>

    <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
         How To SetText on JLabel
        </h1><br>
        <img src="@/assets/ch9pic8.png" alt="pic" width="600" height="300"><br>
        <img src="@/assets/ch9pic9.png" alt="pic" width="600" height="300">
        <img src="@/assets/ch9pic10.png" alt="pic" width="600" height="300">
      </div>
      <p><br>
        In the example, we want to set a Text named oop to replace the word Hello that was announced earlier. From this program, when we haven't pressed the Yes Label button, it will show Hello, but when we press the button, the text will be changed to oop.
      </p>
    </div>
    </section>

    <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
           setActionCommand() && getActionCommand()
        </h1>
        <img src="@/assets/ch9pic11.png" alt="pic" width="600" height="300">
      </div>
      <p><br>
      With set action command, here we are displaying a random number  in the Label on the click of a button.
      </p>
    </div>
  </section>
  <breadcrumb-footer/>
</div>
</template>
<script lang="ts" src="./chapter9-10.ts"></script>
