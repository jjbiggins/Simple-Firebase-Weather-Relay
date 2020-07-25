 File              : README.md
 Author            : Joe Biggins <jjbiggins@joebiggins.io>
 Date              : 24.07.2020
 Last Modified Date: 24.07.2020
 Last Modified By  : Joe Biggins <jjbiggins@joebiggins.io>

# Internet of Things


### Overview and Setup

Designed to an introductory exploration of the cloud-based publisher-subsciber service called Firebase. By integrating the Pi’s sensors with Firebase, you will hopefully gain insight into one of the ways we can start architecting connected IoT solutions. As you may recall from lecture, Firebase is the pub/sub service used by the Nest Learning Thermostat and other commercial IoT applications.

 first need to install several frameworks onto your SD card, including: (1) the Node.js JavaScript run-time environment; (2) the Firebase JavaScript library for Node.js; (3) the “nodeimu” library for Node.js; and (4) the “sense-hat-led” library for Node.js. Installing each of these is covered in detail below. You will then write a Node.js application that communicates and facilitates actions locally, with the Pi’s sensors, and remotely, with a connection to a Firebase database. To get started, first install the dependencies.

### Installing the Node.js JavaScript Run-Time Environment

ou’ll be using Node.js to run your JavaScript application that facilitates interaction between the Pi’s sensors and the remote Firebase database. For this lab, you will use the Long Term Support (LTS) for Node.js version 8.x (Carbon). To install the Node.js run-time environment on your Pi, first ssh into your Pi and then download the Node.js source.

```
    curl ‐sL https://deb.nodesource.com/setup_8.x | sudo ‐E bash –

Following its completion, install Node:

    sudo apt install ‐y nodejs.



