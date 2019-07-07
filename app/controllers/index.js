import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  headerMessage: 'Charles McKinney',
  headersubMessage: 'This is my resume in WebApp Form. Feel free to contact me!',

  aboutMeHeader: 'A Bit About Me',
  age: 'I am 26 years old.',
  aboutMeMessage: "I am very interested in application and Web devolopment. I Have an excellent root base knowledge of \
                   different types of Machine Learning.This includes multiple python libraries for neural netowrks and Support \
                   Vector Machines as well as some work with SVM's in MatLab.",

  currentProjHeader: 'Current Projects...',
  currentProjBody: 'I am currently working on a couple of different projects.  For starters \
                    I am diving further into machine learning and Neural Network programming. \
                    This is something that captured my attention in college, and I have been keeping up with the subject since. \
                    I am also working in a Java class as well as a python class to strengthen my \
                    general skills in those subjects.Python is something I became very familiar with throughout \
                    my college days, however Java, is a more recently acquired skillset and needs a bit more improvement..\
                    Click below to see what all I have been working on in the last year!',

  goingForwardHeader: 'Looking ahead...',
  goingForwardMessage: 'Lookin ahead, I am actively seeking employment as a developer.  Most of the motivation \
                        behind creating this page was to show off at least some of my skills and abilities.  I \
                        hope that you like what you see displayed here and contact me with further questions/ comments/ or notes.',

  responseMessage: '',
  emailAddress: '',


  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email });

      newInvitation.save().then(response => {
        this.set('responseMessage', `Thank you! Saved with ID: ${response.get('id')}, I will get back to you as soon as I can!`);
        this.set('emailAddress', '');
      });

    },

  }

});
