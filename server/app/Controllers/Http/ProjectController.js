'use strict'

class ProjectController {
    async index({ auth }) {
        const user = await auth.getUser();
        console.log(user.id);
        return await user.projects().fetch();
    }
}

module.exports = ProjectController