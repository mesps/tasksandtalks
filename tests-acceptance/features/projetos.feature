Feature: As a user
         I want to register projects
         So that I can menage its attributes

Scenario: Register of project with an existing name
Given I'm at the project's page
And And I can see a project called "Roteiro de requisitos" in the project's list
When I try to register a new project called "Roteiro de requisitos"
Then I see an error message
And I see that there's only on project "Roteiro de requisitos"