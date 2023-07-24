"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderNMX = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const Theme_1 = __importDefault(require("@nmx/template/dist/componentLibrary/Theme"));
const styled_components_1 = require("styled-components");
const GlobalStyles_1 = __importDefault(require("@nmx/template/dist/componentLibrary/foundations/GlobalStyles"));
const renderNMX = (children) => {
    return (0, react_2.render)(<styled_components_1.ThemeProvider theme={Theme_1.default.render(typeof window !== 'undefined' ? window.innerWidth : 480, typeof window !== 'undefined' ? window.innerHeight : 900)}>
      <GlobalStyles_1.default config={{
            nodeEnv: 'dev',
            appName: 'serverless-config-columns-fund',
            appVersion: '0.0.0',
            basePath: 'https://qa.new.northwesternmutual.com',
            nmxTemplateVersion: '3.1.29',
            adobeLaunchScript: '//assets.adobedtm.com/84f7e94eaa36/bb3bc880565f/launch-e98240bdad41-staging.min.js',
            heapAppId: 'test',
            newRelicApplicationId: 'test',
            newRelicLicenseKey: 'test',
            public: {
                googlePlacesApiKey: 'test',
                googleAnalyticsTrackingId: 'test',
                recaptchaV3: 'test'
            },
            services: {
                loginPageUrl: 'https://qa.login.northwesternmutual.com/login',
                loginPageUrlBase: 'https://qa.login.northwesternmutual.com',
                userLogoutUrls: 'https://qa.nmx.cxnon.apps.northwesternmutual.com/nmx-api-proxy/login/logouturls'
            }
        }}/>
      {children}
    </styled_components_1.ThemeProvider>);
};
exports.renderNMX = renderNMX;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsVGhlbWVQcm92aWRlci5qc3giLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnbG9iYWxUaGVtZVByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsa0RBQStDO0FBQy9DLHFDQUFrQztBQUVsQyxzRkFBNkQ7QUFDN0QseURBQWlEO0FBQ2pELGdIQUF1RjtBQUVoRixNQUFNLFNBQVMsR0FBRyxDQUFDLFFBQWEsRUFBTyxFQUFFO0lBQzlDLE9BQU8sSUFBQSxjQUFNLEVBQ1gsQ0FBQyxpQ0FBYSxDQUNaLEtBQUssQ0FBQyxDQUFDLGVBQUssQ0FBQyxNQUFNLENBQ2pCLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUN2RCxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDekQsQ0FBQyxDQUVGO01BQUEsQ0FBQyxzQkFBWSxDQUNYLE1BQU0sQ0FBQyxDQUFDO1lBQ04sT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsZ0NBQWdDO1lBQ3pDLFVBQVUsRUFBRSxPQUFPO1lBQ25CLFFBQVEsRUFBRSx1Q0FBdUM7WUFDakQsa0JBQWtCLEVBQUUsUUFBUTtZQUM1QixpQkFBaUIsRUFBRSxvRkFBb0Y7WUFDdkcsU0FBUyxFQUFFLE1BQU07WUFDakIscUJBQXFCLEVBQUUsTUFBTTtZQUM3QixrQkFBa0IsRUFBRSxNQUFNO1lBQzFCLE1BQU0sRUFBRTtnQkFDTixrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQix5QkFBeUIsRUFBRSxNQUFNO2dCQUNqQyxXQUFXLEVBQUUsTUFBTTthQUNwQjtZQUNELFFBQVEsRUFBRTtnQkFDUixZQUFZLEVBQUUsK0NBQStDO2dCQUM3RCxnQkFBZ0IsRUFBRSx5Q0FBeUM7Z0JBQzNELGNBQWMsRUFBRSxpRkFBaUY7YUFDbEc7U0FDRixDQUFDLEVBQ0o7TUFBQSxDQUFDLFFBQVEsQ0FDWDtJQUFBLEVBQUUsaUNBQWEsQ0FBQyxDQUNqQixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBakNZLFFBQUEsU0FBUyxhQWlDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdAdGVzdGluZy1saWJyYXJ5L3JlYWN0J1xuaW1wb3J0ICdAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tJ1xuXG5pbXBvcnQgVGhlbWUgZnJvbSAnQG5teC90ZW1wbGF0ZS9kaXN0L2NvbXBvbmVudExpYnJhcnkvVGhlbWUnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJ0BubXgvdGVtcGxhdGUvZGlzdC9jb21wb25lbnRMaWJyYXJ5L2ZvdW5kYXRpb25zL0dsb2JhbFN0eWxlcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlck5NWCA9IChjaGlsZHJlbjogYW55KTogYW55ID0+IHtcbiAgcmV0dXJuIHJlbmRlcihcbiAgICA8VGhlbWVQcm92aWRlclxuICAgICAgdGhlbWU9e1RoZW1lLnJlbmRlcihcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDQ4MCxcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiA5MDBcbiAgICAgICl9XG4gICAgPlxuICAgICAgPEdsb2JhbFN0eWxlc1xuICAgICAgICBjb25maWc9e3tcbiAgICAgICAgICBub2RlRW52OiAnZGV2JyxcbiAgICAgICAgICBhcHBOYW1lOiAnc2VydmVybGVzcy1jb25maWctY29sdW1ucy1mdW5kJyxcbiAgICAgICAgICBhcHBWZXJzaW9uOiAnMC4wLjAnLFxuICAgICAgICAgIGJhc2VQYXRoOiAnaHR0cHM6Ly9xYS5uZXcubm9ydGh3ZXN0ZXJubXV0dWFsLmNvbScsXG4gICAgICAgICAgbm14VGVtcGxhdGVWZXJzaW9uOiAnMy4xLjI5JyxcbiAgICAgICAgICBhZG9iZUxhdW5jaFNjcmlwdDogJy8vYXNzZXRzLmFkb2JlZHRtLmNvbS84NGY3ZTk0ZWFhMzYvYmIzYmM4ODA1NjVmL2xhdW5jaC1lOTgyNDBiZGFkNDEtc3RhZ2luZy5taW4uanMnLFxuICAgICAgICAgIGhlYXBBcHBJZDogJ3Rlc3QnLFxuICAgICAgICAgIG5ld1JlbGljQXBwbGljYXRpb25JZDogJ3Rlc3QnLFxuICAgICAgICAgIG5ld1JlbGljTGljZW5zZUtleTogJ3Rlc3QnLFxuICAgICAgICAgIHB1YmxpYzoge1xuICAgICAgICAgICAgZ29vZ2xlUGxhY2VzQXBpS2V5OiAndGVzdCcsXG4gICAgICAgICAgICBnb29nbGVBbmFseXRpY3NUcmFja2luZ0lkOiAndGVzdCcsXG4gICAgICAgICAgICByZWNhcHRjaGFWMzogJ3Rlc3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXJ2aWNlczoge1xuICAgICAgICAgICAgbG9naW5QYWdlVXJsOiAnaHR0cHM6Ly9xYS5sb2dpbi5ub3J0aHdlc3Rlcm5tdXR1YWwuY29tL2xvZ2luJyxcbiAgICAgICAgICAgIGxvZ2luUGFnZVVybEJhc2U6ICdodHRwczovL3FhLmxvZ2luLm5vcnRod2VzdGVybm11dHVhbC5jb20nLFxuICAgICAgICAgICAgdXNlckxvZ291dFVybHM6ICdodHRwczovL3FhLm5teC5jeG5vbi5hcHBzLm5vcnRod2VzdGVybm11dHVhbC5jb20vbm14LWFwaS1wcm94eS9sb2dpbi9sb2dvdXR1cmxzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfX0gLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cbiJdfQ==