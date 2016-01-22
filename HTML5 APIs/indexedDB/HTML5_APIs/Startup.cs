using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HTML5_APIs.Startup))]
namespace HTML5_APIs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
